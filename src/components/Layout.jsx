import { useState, useEffect } from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

function LayoutComponent() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={isMobile ? "app-layout" : "web-layout"}>
			{isMobile ? <MobileView /> : <DesktopView />}
		</div>
	);
}

export default LayoutComponent;
