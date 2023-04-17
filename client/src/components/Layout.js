import Meet from "./Meeting"


const Layout = () => {
  return (
		<>
      <div style={{ padding: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img alt="logo" src="https://dyte.io/blog/content/images/2021/09/Dyte-Logo.svg" height={"70px"}/>
        <span style={{ fontSize: "30px", color: "#3e75fd" }}>Collaborative Code Editor</span>
        <img alt="logo" style={{ opacity: "0"}} src="https://dyte.io/blog/content/images/2021/09/Dyte-Logo.svg" height={"80px"}/>
      </div>
      <div style={{ height: "88vh" }} ><Meet /></div>
    </>
  )
}

export default Layout