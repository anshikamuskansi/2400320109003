import NotificationForm from "../components/NotificationForm";
import NotificationCard from "../components/NotificationCard";
import { useNotificationContext } from "../state/NotificationContext";

function Dashboard() {
  const {
    notifications,
    setNotifications,
  } = useNotificationContext();

  const addNotification = (message) => {
    setNotifications([
      ...notifications,
      {
        id: Date.now(),
        message,
      },
    ]);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <>
      <h1>Notification Dashboard</h1>

      <NotificationForm
        addNotification={addNotification}
      />

      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          item={item}
          removeNotification={
            removeNotification
          }
        />
      ))}
    </>
  );
}

