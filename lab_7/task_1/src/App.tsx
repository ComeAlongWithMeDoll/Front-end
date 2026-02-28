import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Home() {
    return <h1> Home Page </h1>;
}

function ErrorFallback() {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2> Something went wrong </h2>
            <p> Failed to load component </p>
            <button onClick={() => window.location.reload()}>
                Reload Page
            </button>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/dashboard">DashBoard</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/profile">Profile</Link>
            </nav>

            <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            </Suspense>
            </ErrorBoundary>
        </div>
    );
}