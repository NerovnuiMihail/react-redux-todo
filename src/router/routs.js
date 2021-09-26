import Home from "../containers/Home/Home";
import PageNotFound from '../containers/PageNotFound';
import ToDoPage from "../containers/Todo/ToDoPage";
import PlaceholderToDo from "../containers/PlaceholderToDo/PlaceholderToDo";
import Posts from "../containers/Posts/Posts";

export const routs = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/todos',
        exact: true,
        component: ToDoPage
    },
    {
        path: '/place_todos',
        exact: true,
        component: PlaceholderToDo
    },
    {
        path: '/post/:id',
        exact: true,
        component: Posts
    },
    {
        path: '*',
        exact: true,
        component: PageNotFound
    },
];