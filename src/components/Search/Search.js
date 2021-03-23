import React from 'react';
import api from '../api/api';
import normalize from './normalize';
import SearchBox from './SearchBox';
import Gallery from './Gallery';
import GalleryItem from './GalleryItem';
import Pagination from "react-js-pagination";


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: [],
      isLoading: true,
      activePage:10
    };
  }

  componentDidMount() {
    const { match: { params: { query } } } = this.props;

    this.searchAssets(query);
  }

  searchAssets(query) {
    this.setState({ isLoading: true });

    api
      .search(query)
      .then(response => {
        this.setState({ isLoading: false });
        this.setState({ assets: normalize.search(response) });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  }

  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
    this.searchAssets(query);
  };
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const { match: { params: { query = '' } } } = this.props;
    const { assets, isLoading } = this.state;

    const galleryItems = assets.map(({ image, nasaId, title }) => {
      return (
        <GalleryItem image={image} id={nasaId} key={nasaId} title={title} />
      );
    });

    const seachContent = () => {  
      if (assets.length > 0) return <Gallery>{galleryItems}</Gallery>;

      if (assets.length === 0)
        return (
          <p className="">
            Ooops, we haven't found anything in the space, please search with
            other term.
          </p>
        );
    };

    return (
      <div className="">
        <div className="">
            <SearchBox
              onSubmit={this.handleSubmit}
              shadow={false}
              query={query}
            />
        </div>
        <div className="">{seachContent()}</div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={5}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default Search;
