import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";
import FriendsDetails from "../components/FriendsDetails/FriendsDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/Timeline",
        element: <TimeLine></TimeLine>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
      {
        path: "/friendsDetails/:friendId",
        element: <FriendsDetails> </FriendsDetails>
      },
    ],
    errorElement: <div>Not Found</div>,
  },
]);
