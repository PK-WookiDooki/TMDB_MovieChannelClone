import {Navigate, useLocation} from "react-router-dom";

const SearchGuard = ({children}) => {
    const query = useLocation().search;
    const searchParams = new URLSearchParams(query)
    const searchedKeyword = searchParams.get("query")

    if(searchedKeyword?.trim().length < 1){
        return <Navigate to={"/"}/>
    }else{
        return children
    }
};

export default SearchGuard;
