import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROFILES } from "./apolloClient/queries";
import UserCard from "./components/userCard/userCard";
import UserDetailCard from "./components/detailCard/userdetailCard";
import { images } from "./assets/images";
import FilterBox from "./components/filters/filterBox";
const App=()=> {
    const profilesPerPage = 10; // Number of profiles to display per page
 
    const [currentPage, setCurrentPage] = useState(0);
    const [searchString, setSearchString] = useState(""); 

    const { data, loading, error, refetch } = useQuery(GET_ALL_PROFILES, {
        variables: {
            orderBy: {
                key: "is_verified",
                sort: "desc",
            },
            rows: profilesPerPage,
            page: currentPage,
            searchString: "",
        },
    });

    useEffect(() => {
        refetch();
        console.log(data);
    }, [currentPage]);

    const print = () => {
        console.log(data?.getAllProfiles?.profiles);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    const filteredProfiles = data?.getAllProfiles?.profiles?.filter((profile) => {
        const firstName = profile?.first_name ?? '';
        const lastName = profile?.last_name ?? '';
      
        return (
          firstName.toLowerCase().includes(searchString.toLowerCase()) ||
          lastName.toLowerCase().includes(searchString.toLowerCase())
        );
      });

    return (
        <div className="App" onClick={print}>
            <div
                style={{
                    height: "56px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 1px",
                    display: "flex",
                    width: "100%",
                    marginBottom: "20px",
                }}
            >
                <img width={"106px"} height={"32px"} src={images.viralnation} />
            </div>
            <div style={{width:"80%",margin:"0px auto"}}>
                <FilterBox profiles={data?.getAllProfiles?.profiles} />
 
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div style={{ display: "flex", boxShadow: "initial", width: "80%", margin: "0px auto",background:"#F5F5F5" }}>
                    <div style={{ width: "20%", background: "#F6F6F6", padding: "12px" }}>
                        <p style={{ marginBottom: "16px", marginTop: "0px", display: "flex", fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161", }}>Name</p>
                       {filteredProfiles.map((item, index) => (
                            <UserCard
                                key={index}
                                image={item.image_url}
                                name={`${item.first_name} ${item.last_name}`}
                                alt={item.image_url}
                            />
                        ))}
                    </div>
                    <div
                        style={{
                            width: "80%",
                            boxShadow: "inset 5px 0px 13px 2px rgba(0, 0, 0, 0.05)",
                            padding: "12px",
                            background:"#F5F5F5"
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p
                                style={{
                                    marginBottom: "16px",
                                    marginTop: "0px",
                                    width: "33%",
                                    display: "flex",
                                    fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    paddingLeft:"22px",
                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161",
                                }}
                            >
                                Id
                            </p>
                            <p style={{
                                    marginBottom: "16px",
                                    marginTop: "0px",
                                    width: "33%",
                                    display: "flex",
                                    fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161",
                                }}>
                                Email
                            </p>
                            <p style={{
                                    marginBottom: "16px",
                                    marginTop: "0px",
                                    width: "33%",
                                    display: "flex",
                                    fontFamily: "Roboto",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    paddingLeft:"30px",

                                    /* identical to box height, or 143% */

                                    /* grey/700 */

                                    color: "#616161",
                                }}>
                                Description
                            </p>
                        </div>
                        {data?.getAllProfiles?.profiles?.map((item, index) => (
                            <UserDetailCard key={index} email={item.email} id={item.id} descp={item.description} />
                        ))}
                    </div>
                </div>
            )}
            <div className="pagination" style={{ marginTop: "16px" }}>
                <button onClick={goToPreviousPage} disabled={currentPage === 0}>
                    Previous
                </button>
                <button onClick={goToNextPage} disabled={data?.getAllProfiles?.profiles?.length < profilesPerPage}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
