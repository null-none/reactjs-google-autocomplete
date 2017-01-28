import React, {
    Component
} from 'react';

export default class PlacesAutocomplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
          result : []
        }
        this.autocomplete = null;
    }

    componentDidMount() {
      this.autocomplete = new google.maps.places.Autocomplete(this.refs.input, {});
      this.autocomplete.addListener('place_changed', this.onSelected.bind(this));
    }

    onSelected() {
      this.setState({result: this.autocomplete.getPlace()});
    }

    render() {
        return (
          <div className="form-group">
            <label for="location">Location</label>
            <input
              className="form-control"
              type="text"
              ref="input"
            />
          </div>
        );
    }
}
