import { render } from "@testing-library/react";
import Error404 from "../components/Error404";
import HomeLayout from "../components/Home";
import Router from "../components/Router";
import { HOME_URL } from "../constants/url";

test('Routing tests with an url \'/home\'', () => {
    render(<Router url={HOME_URL.long} />);
    expect(<HomeLayout/>);
});

test('Routing tests with an url \'/\'', () => {
    render(<Router url={HOME_URL.short} />);
    expect(<HomeLayout/>);
});

test('Routing tests with an url 404', () => {
    render(<Router url={'Someting else'} />);
    expect(<Error404/>);
});

test('Routing tests without url', () => {
    render(<Router/>);
    expect(<HomeLayout/>);
});