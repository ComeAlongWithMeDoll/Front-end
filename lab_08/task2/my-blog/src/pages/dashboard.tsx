import { GetServerSideProps } from "next";
import { User, Notification, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
      
      <section style={{ border: "1px solid #ccc", padding: "15px", margin: "20px 0" }}>
        <h2>Analytics</h2>
        <p>Page Views: {analytics.pageViews.toLocaleString()}</p>
        <p>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</p>
      </section>

      <section>
        <h2>Notifications ({unreadCount} unread)</h2>
        {notifications.map(notif => (
          <div key={notif.id} style={{ color: notif.type === "success" ? "green" : "black" }}>
            • {notif.message}
          </div>
        ))}
      </section>

      <p style={{ marginTop: "40px", color: "gray" }}>Last updated: {currentTime}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Данные имитируются, но в реальном приложении здесь был бы вызов API с токеном пользователя
  const user: User = { id: "user-123", name: "Demo User", email: "demo@example.com", avatar: "", role: "user" };
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics();

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toLocaleTimeString(),
    },
  };
};