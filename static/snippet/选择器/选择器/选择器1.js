<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  /**
   * @function document.querySelector 
   * @syntax
   * element = document.querySelector(selectors);
   * @example
   * var el = document.querySelector(".myclass");
   */
  console.log('#foo\bar')               // "#fooar"
  document.querySelector('#foo\bar')    // Does not match anything

  console.log('#foo\\bar')              // "#foo\bar"
  console.log('#foo\\\\bar')            // "#foo\\bar"
  document.querySelector('#foo\\\\bar') // Match the first div

  document.querySelector('#foo:bar') // Does not match anything
  document.querySelector('#foo\\:bar') // Match the second div
</script>