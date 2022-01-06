import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calc extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">0</div>
          <div className="display-buttons">
            <div className="operators">
              <button type="button">÷</button>
              <button type="button">x</button>
              <button type="button">-</button>
              <button type="button">+</button>
              <button type="button" id="equal">=</button>
            </div>

            <div className="digits">
              <button type="button" className="btn">
                AC
              </button>
              <button type="button" className="btn">
                +/-
              </button>
              <button type="button" className="btn">
                %
              </button>

              <button type="button" className="btn">
                7
              </button>
              <button type="button" className="btn">
                8
              </button>
              <button type="button" className="btn">
                9
              </button>
              <button type="button" className="btn">
                4
              </button>
              <button type="button" className="btn">
                5
              </button>

              <button type="button" className="btn">
                6
              </button>
              <button type="button" className="btn">
                1
              </button>
              <button type="button" className="btn">
                2
              </button>
              <button type="button" className="btn">
                3
              </button>
              <button type="button" className="zero">
                0
              </button>

              <button type="button" className="point">
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
