import Main from "@pages/main";

const routes = [
    {
        path: "/",
        routes: [
            ['/*', <Main />],
        ]
    }
];

export default routes;