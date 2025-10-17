import React from "react";
interface layout {
	className?: String;
	children: React.ReactNode;
}
const Wrapper = ({ className, children }: layout) => {
	return <div className={`max-w-[1500px] px-2 mx-auto ${className}`}>{children}</div>;
};

export default Wrapper;
