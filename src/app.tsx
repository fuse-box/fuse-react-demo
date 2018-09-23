import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link, Switch, Route, navigate } from "fuse-react";
import "./style.scss";

const config = {
	routes: {
		"/blog": {
			component: () => import("./routes/blog/Blog")
		},
		"/news": {
			component: () => import("./routes/news/News")
		},
		"/listing": {
			component: () => import("./routes/listing/Listing")
		}
	}
};
class Menu extends React.Component {
	public render() {
		const menuConfig = [
			{ to: "/blog", label: "Blogs" },
			{ to: "/news", label: "News" },
			{ to: "/listing", label: "Listing" }
		];
		return (
			<div className="menu">
				{menuConfig.map((item, i) => (
					<Link activeClassName="active" key={i} to={item.to}>
						{item.label}
					</Link>
				))}
			</div>
		);
	}
}
class MyRootComponent extends React.Component {
	public render() {
		return (
			<div className="demo">
				<div className="left">
					<Menu />
				</div>
				<div className="right">
					<Switch>
						<Route path="/" exact component={()=> navigate("/blog")} />
					</Switch>
					<Switch config={config}/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<MyRootComponent />, document.querySelector("#root"));

			// alternate/original example without default active styles
			// <div className="demo">
			// 	<div className="left">
			// 		<Menu />
			// 	</div>
			// 	<div className="right">
			// 		<Switch config={config}/>
			// 	</div>
			// </div>
