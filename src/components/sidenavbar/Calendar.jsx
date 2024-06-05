const Calendar = () => {
  const defaultModalProps = { id: "", title: "", start: null, end: null };
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [modalProps, setModalProps] = React.useState(defaultModalProps);
  const [events, setEvents] = React.useState(entries);

  const calendarRef = React.useRef();
  const currentDate = moment().format("YYYY-MM-DD");

  const onDateClick = (props) => {
    const { date } = props;
    const id = events.length + 1;
    const endDate = new Date(date).setDate(date.getDate() + 1);

    setModalProps({ ...modalProps, id, start: date, end: endDate });
    setShowAddModal(true);
  };

  const onEventClick = (props) => {
    const { event: { id, title, start, end } } = props;
    setModalProps({ id, title, start, end });
    setShowEditModal(true);
  };

  const onEventUpdate = (props) => {
    const { id, title, start, end } = props;
    const calendarApi = calendarRef.current.getApi();
    const calendarElem = calendarApi.getEventById(id);

    if (calendarElem) {
      calendarElem.setProp("title", title);
      calendarElem.setStart(start);
      calendarElem.setEnd(end);
    }

    setShowEditModal(false);
  };

  const onEventAdd = (props) => {
    const newEvent = { ...props, dragable: true, className: 'bg-blue text-white', allDay: true };

    setShowAddModal(false);
    setEvents([...events, newEvent]);
    setModalProps(defaultModalProps);
  };

  const onEventDelete = async function(id) {
    const result = await SwalWithBootstrapButtons.fire({
      icon: 'error',
      title: 'Confirm deletion',
      text: 'Are you sure you want to delete this event?',
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: 'Cancel'
    });

    setShowEditModal(false);
    setModalProps(defaultModalProps);

    if (result.isConfirmed) {
      await SwalWithBootstrapButtons.fire('Deleted!', 'The event has been deleted.', 'success');

      const newEvents = events.filter(e => e.id !== id);
      setEvents(newEvents);
    }
  };

  const handleClose = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };

  return <>
    {
    showEditModal ? (
      <EventModal
        {...modalProps}
        edit={true}
        show={showEditModal}
        onUpdate={onEventUpdate}
        onDelete={onEventDelete}
        onHide={handleClose}
      />
    ) : null}

    {showAddModal ? (
      <EventModal
        {...modalProps}
        show={showAddModal}
        onAdd={onEventAdd}
        onHide={handleClose}
      />
    ) : null}

    <FullCalendar
      editable
      selectable
      events={events}
      ref={calendarRef}
      themeSystem="bootstrap"
      initialView="dayGridMonth"
      displayEventTime={false}
      initialDate={currentDate}
      dateClick={onDateClick}
      eventClick={onEventClick}
      plugins={[dayGridPlugin, timeGridPlugin, bootstrapPlugin, interactionPlugin]}
      buttonText={{
        prev: "Previous",
        next: "Next",
        month: "Month",
        week: "Week",
        day: "Day",
        today: "Today",
      }}
    />
  </>;
};

render( <Calendar /> );