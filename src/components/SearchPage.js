import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import  useGoogleSearch from './useGoogleSearch'
import Response from './response'
import { Link } from 'react-router-dom'
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";


export default function SearchPage() {
    const [{ term }, dispatch] = useStateValue()
    
    // Live API call
    // const { data } = useGoogleSearch(term)
    
    //Mock api data
    const data = Response
    console.log(data);

    return (
      <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="logo"
            />
          </Link>

          <div className="searchPage__headerBody">
            <Search hideButtons />
            <div className="searchPage__features">
              <div className="searchPage__featuresLeft">
                <div className="searchPage__feature">
                  <SearchIcon />
                  <Link to="./all">All</Link>
                </div>
                <div className="searchPage__feature">
                  <DescriptionIcon />
                  <Link to="./news">News</Link>
                </div>
                <div className="searchPage__feature">
                  <ImageIcon />
                  <Link to="./images">Images</Link>
                </div>
                <div className="searchPage__feature">
                  <LocalOfferIcon />
                  <Link to="./shopping">Shopping</Link>
                </div>
                <div className="searchPage__feature">
                  <RoomIcon />
                  <Link to="./maps">Maps</Link>
                </div>
                <div className="searchPage__feature">
                  <MoreVertIcon />
                  <Link to="./more">More</Link>
                </div>
              </div>

              <div className="searchPage__featuresRight">
                <div className="searchPage__feature">
                  <Link to="./settings">Settings</Link>
                </div>
                <div className="searchPage__feature">
                  <Link to="./tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {term && (
          <div className="searchPage__results">
            <p className="searchPage__resultsCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a className='searchPage__resultLink'
                    href={item.link}
                >
                    {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src && (
                        <img className='searchPage__resultImage'
                            src={item.pagemap?.cse_image[0]?.src}
                            alt=''
                        >
                        </img>)}
                    {item.displayLink} ▽
                </a>

                <a className="searchPage__resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>

                <p className="searchPage__resultSnippet">
                    {item.snippet}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}
