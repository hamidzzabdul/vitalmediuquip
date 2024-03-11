import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="side-menu">
            <ul className="features-lists">
                <li className="list-items">
                    <h3>Products</h3>
                    <div className="items">
                        <NavLink to="/admin">Add Products</NavLink>
                        <NavLink to="/admin/add-categories">Add Categories </NavLink>
                        <NavLink to="/admin/edit">Edit & Delete products</NavLink>
                        <NavLink to="/admin/add-sub-categories">Add Subcategories</NavLink>
                    </div>
                </li>
                <li className="list-items">
                    <h3>Blogs</h3>
                    <div className="items">
                        <NavLink to="/admin/add-blogs">Add Blogs </NavLink>
                        <NavLink to="/admin/edit-blogs">Edit Blogs</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar