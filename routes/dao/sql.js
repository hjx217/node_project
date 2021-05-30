exports.userLogin = (username,password) => {
    return "select username,password from tab_blog where username='"+username+"' and password='"+password+"'";
}
exports.tab3 = () =>{
    return "select * from tab_3"
}