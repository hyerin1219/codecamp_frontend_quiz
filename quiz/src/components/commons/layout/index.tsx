import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";

interface ILayoutProps {
    children: JSX.Element
}

export default function Layout(props:ILayoutProps):JSX.Element {

    return (
        <>
            <LayoutHeader></LayoutHeader>
            <LayoutBanner></LayoutBanner>
            <LayoutNavigation></LayoutNavigation>
            <div style={{display: "flex"}}>
                <LayoutSidebar></LayoutSidebar>
                <div>{props.children}</div>
            </div>
            <LayoutFooter></LayoutFooter>
        </>
        
    )
}