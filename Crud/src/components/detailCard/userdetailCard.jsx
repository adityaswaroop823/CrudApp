const UserDetailCard = ({ data, id, email, descp }) => {
    return (
        <div style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", height: "55px" }}>
                <div style={{ width: "20%" }}>
                    <p style={{ whiteSpace: "nowrap", width: "100%", overflow: "hidden", textOverflow: "ellipsis",  fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161", }}>
                        {id}
                    </p>
                </div>
                <div style={{ width: "40%" }}>
                    <p style={{ whiteSpace: "nowrap", width: "100%", overflow: "hidden", textOverflow: "ellipsis",  fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161", }}> {email}</p>{" "}
                </div>
                <div style={{ width: "40%" }}>
                    {" "}
                    <p style={{ whiteSpace: "nowrap", width: "100%", overflow: "hidden", textOverflow: "ellipsis",  fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161", }}>{descp}</p>{" "}
                </div>
            </div>
            {/* <div className="responsive-table">
                <div>
                    <div>
                        <div>ID</div>
                        <div>Email ID</div>
                        <div>Description</div>
                    </div>
                </div>
                <div>
                    {data.map((item) => (
                        <div key={item.id} style={{ height: "55px", marginBottom: "12px" }}>
                            <div data-label="ID">{item.id}</div>
                            <div data-label="Email ID">{item.email}</div>
                            <div data-label="Description">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};
export default UserDetailCard;
