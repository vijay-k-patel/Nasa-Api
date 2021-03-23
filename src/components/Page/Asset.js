import React from 'react';
import SearchBox from '../Search/SearchBox';
import api from '../api/api';
import normalize from '../Search/normalize';

class Asset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      asset: {},
      isLoading: true,
      
    };
  }
  componentDidMount() {
    console.log(this.props);
    const { match: { params: { id } } } = this.props;

    api
      .asset(id)
      .then(response => {
        this.setState({ isLoading: false });
        this.setState({ asset: normalize.asset(response) });
        console.log(normalize.asset(response));
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  }
  
  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    const {
      isLoading,
      asset: {
        image,
        title,
        description,
        secondaryCreator: author,
        dateCreated: date
      }
    } = this.state;

    const meta = [new Date(date).toLocaleDateString(), author].filter(n => !!n);

    const assetContent = (
      <div className="">
        <div className="">
          <img src={image} alt={title} title={title} />
        </div>
        <div className="">
          
          {title && <h1 className="">{title}</h1>}
          {meta.length && <p className="">{meta.join(', ')}</p>}
          {description && <p className="">{description}</p>}
        </div>
      </div>
    );

    return (
      <div className="">
        <div className="">
            <SearchBox shadow={false} onSubmit={this.handleSubmit} />  
        </div>
        {!isLoading && assetContent}
        
      </div>
    );
  }
}
export default Asset;
