import { useState } from "react";
import { images } from "../../assets/images";

const FilterBox = ({ profiles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the profiles based on the search query
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px auto",
        columnGap: "5px",
        marginBottom: "40px",
      }}
    >
      <div style={{ width: "75%" }}>
        <input
          style={{ width: "100%", height: "30px" }}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div style={{ width: "15%", display: "flex", justifyContent: "center" }}>
        {/* Rest of the code */}
        <button
                    style={{
                        borderRadius: "6px",
                        border: "1px solid #3DACFF",
                        height: "36px",
                        width: "90%",
                        background: "white",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    {" "}
                    <img src={images.addIcond} alt="add" />
                    <p
                        style={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "20px",
                            /* identical to box height, or 143% */
                            marginBottom: "0px ",
                            marginTop: "0px ",

                            letterSpacing: "0.25px",
                            textTransform: "capitalize",

                            /* colour/primary */

                            color: "#3DACFF",
                        }}
                    >
                        Create Profile{" "}
                    </p>{" "}
                </button>
      </div>
      <div style={{ width: "8%", height: "36px", display: "flex", border: "1px solid #BDBDBD", justifyContent: "center", alignItems: "center", borderRadius: "4px" }}>
        {/* Rest of the code */}
        <div style={{width:"50%"}}>
                    <img width={13} src={images.toggleLeft} alt="" />
                </div>
                <div style={{width:"50%",background:"rgba(64, 118, 184, 0.15)",height:"36px",display:"flex",justifyContent:"center"}}>
                    <img width={13}  src={images.toggleRight} alt="" />
                </div>
      </div>

      {/* Render the filtered profiles */}
      <div>
        {filteredProfiles.map((profile) => (
          <div key={profile.id}>
            <h3>{profile.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
