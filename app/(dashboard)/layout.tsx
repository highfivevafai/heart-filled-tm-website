const Layout = ({children}: {children: React.ReactNode}) => {
  return ( 
    <div>
      <p>Dashboard NavBar</p>
      {children}
    </div>
   );
}
 
export default Layout;