import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../context/contextApi"
import LeftNav from "./LeftNav"
import SearchResultVideoCards from "./SearchResultVideoCards"
import { fetchDataFromApi } from "../utils/api"




const SearchResult = () => {
  const [result, setResult] = useState<any[]>([]);
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context)

  useEffect(() => {
    document.getElementById("root")?.classList.remove("custom-h")
    fetchSearchResults(searchQuery);
  }, [searchQuery])

  const fetchSearchResults = async (query: string = ""): Promise<void> => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)?.then((res: any) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };





  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result && result?.map((item: any) => {
            if (item?.type !== "video") return false;
            let video = item?.video
            return (
              <SearchResultVideoCards key={video?.videoId} video={video} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult