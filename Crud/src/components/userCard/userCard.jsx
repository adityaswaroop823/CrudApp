import { images } from "../../assets/images";
import UserDetailCard from "../detailCard/userdetailCard";

const UserCard = ({ image, name, alt, data }) => {
    const handleImageError = (event) => {
        event.target.src =
            "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"; // Replace "default-image.png" with your default image URL
    };
    return (
        <div>
            <div style={{ display: "flex", marginBottom: "12px", height: "55px", alignItems: "center" }}>
                <div style={{ display: "flex", columnGap: "10px" }}>
                    <img
                        width={48}
                        height={48}
                        src={image}
                        onError={(event) => handleImageError(event)}
                        alt={alt}
                        style={{ borderRadius: "50%" }}
                    />
                    <p
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            marginRight: "10px",
                            whiteSpace: "nowrap",
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "16px",
                            /* identical to box height, or 143% */

                            /* grey/700 */

                            color: "#212121",
                        }}
                    >
                        {name}
                    </p>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <img src={images.verifyIcon} alt="" />
                </div>
                <div>{/* <UserDetailCard data={data}/> */}</div>
            </div>
        </div>
    );
};
export default UserCard;
