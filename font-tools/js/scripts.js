// Tab product pricing and options calculator

const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

const tabProduct = {
  setup: function() {
    this.getTabsTotalCount();
    this.updateTabsTotal();
    this.updatePaperWeight();
    this.updateSizeAndPosition();
    this.resetTabForm();
  },

  tabInputs: [...selectAll('.product__tabs-form input')],
  tabForm: select('.product__tabs-form'),
  priceField: select('.product__price-display'),
  positionAndSize: select('.product__option-position-size-select'),
  paperWeight: select('.product__option-paper-weight-select'),
  formResetButton: select('.product__tabs-form-reset'),
  totalTabs: 0,
  tabDetails: null,
  getTabsTotalCount: function() {
    this.totalTabs = this.tabInputs.reduce((total, tab) => total + this.validateTabInput(tab.value), 0);
    console.log("TOTAL TABS #: ", this.totalTabs);
  },
  updateTabsTotal: function () {
    this.tabForm.addEventListener('change', (event) => {
      if (event.target.tagName === 'INPUT') {
        this.getTabsTotalCount();
        this.getTabDetails();
        this.updatePrice();
      };
    })
  },
  validateTabInput: function(value) {
    if (typeof value === 'string' && parseInt(value) >= 0) {
      return parseInt(value)
    } else if (value.length === 0) {
      return 0;
    }
  },
  getTabDetails: function () {
    let tabOrder = [];
    this.tabInputs.forEach(tab => {
      let tabObject = {};
      if (parseInt(tab.value) !== 0) {
        tabObject.tab = tab.dataset.tab;
        tabObject.quantity = tab.value;

        if (tabObject.quantity.length === 0) {
          tabObject.quantity = 0;
        }

        tabOrder.push(tabObject);
      }
    });
    this.tabDetails = tabOrder;
    console.log(this.tabDetails);
  },
  updatePaperWeight: function () {
    this.paperWeight.addEventListener('change', (event) => {
      this.updatePrice();
    })
  },
  updateSizeAndPosition: function () {
    this.positionAndSize.addEventListener('change', (event) => {
      this.updatePrice();
    })
  },
  resetTabForm: function() {
    this.formResetButton.addEventListener('click', event => {
      event.preventDefault();
      this.tabInputs.forEach(tab => tab.value = 0);
      this.totalTabs = 0;
      this.updatePrice();
    });
  },
  tabSpecs: {
    paperStocks: {
      eighty: {
        sizes: {
          letter: {
            pounds: .016,
            thickness: .0065
          },
          legal: {
            pounds: .017,
            thickness: .0065
          }
        }
      },
      ninety: {
        sizes: {
          letter: {
            pounds: .017,
            thickness: .0067
          },
          legal: {
            pounds: .018,
            thickness: .0067
          }
        }
      },
      oneten: {
        sizes: {
          letter: {
            pounds: .018,
            thickness: .007
          },
          legal: {
            pounds: .019,
            thickness: .007
          }
        }
      }
    },
  },
  pricingTable: {
    weights: [
      {
        name: 'eighty',
        size: {
          letter: [.25, .12, .08, .06],
          legal: [.30, .16, .12, .1]
        }
      },
      {
        name: 'ninety',
        size: {
          letter: [.27, .14, .1, .08],
          legal: [.32, .18, .14, .12]
        }
      },
      {
        name: 'oneten',
        size: {
          letter: [.29, .17, .13, .11],
          legal: [.35, .21, .17, .15]
        }
      }
    ]
  },
  updatePrice: function() {
    let updatedPrice = this.calculatePrice()
    this.priceField.textContent = updatedPrice;
  },
  calculatePrice: function() {
    // first get paper weight
    const paperWeight = this.paperWeight.options[this.paperWeight.selectedIndex].dataset.name;
    // retrieive price table
    let table = this.pricingTable.weights.filter(table => table.name === paperWeight);
    // then determine size and position
    const sizeAndPosition = this.positionAndSize.options[this.positionAndSize.selectedIndex].dataset.value;
    // lookup pricing for weight and size
    const priceBreaks = table[0].size[sizeAndPosition];
    // multiple quantity against price breaks
    let updatedPrice = 0;
    if (isNaN(this.totalTabs) || this.totalTabs === 0) {
      updatedPrice = 0;
    } else if (this.totalTabs <= 100) {
      updatedPrice = parseFloat(parseInt(this.totalTabs) * priceBreaks[0]).toFixed(2);
    } else if (this.totalTabs <= 250) {
      updatedPrice = parseFloat(parseInt(this.totalTabs) * priceBreaks[1]).toFixed(2);
    } else if (this.totalTabs <= 500) {
      updatedPrice = parseFloat(parseInt(this.totalTabs) * priceBreaks[2]).toFixed(2);
    } else {
      updatedPrice = parseFloat(parseInt(this.totalTabs) * priceBreaks[3]).toFixed(2);
    }

    console.log("total tabs: ", this.totalTabs);
    console.log("final price: ", updatedPrice);
    return updatedPrice;
  }

}

tabProduct.setup();
