import { Component } from 'react';

export class Feedback extends Component {
  static defaultProps = {
    initualValue: 0,
  };

  state = {
    good: this.props.initualValue,
    neutral: this.props.initualValue,
    bad: this.props.initualValue,
    // total: this.props.initualValue,
    // posFeedback: this.props.initualValue,
  };

  FeedbackClick = e => {
    console.log(e.target.name);
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
        </div>

        <div>
          <button name="good" onClick={this.FeedbackClick} type="button">
            Good
          </button>
          <button name="neutral" onClick={this.FeedbackClick} type="button">
            Netural
          </button>
          <button name="bad" onClick={this.FeedbackClick} type="button">
            Bad
          </button>
        </div>

        <div>
          <h1>Statistic</h1>
          <span>Good: {this.state.good}</span>
          <span>Netural: {this.state.neutral}</span>
          <span>Bad:{this.state.bad}</span>
          <span>Total: {this.countTotalFeedback()}</span>
          <span>
            Positive feedback:{this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </div>
    );
  }
}
