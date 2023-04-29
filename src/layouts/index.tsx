import { Link, Outlet } from "umi";
import styles from "./index.less";

import { Button } from "antd";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Button type="primary">connect wallet</Button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
