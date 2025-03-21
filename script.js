const layoutHeight = 200; // vh units

const blocks = [
  {
    blockNumber: 1,
    xRatio: 0,
    yRatio: 0,
    wRatio: 0.1111111111111111,
    hRatio: 1,
    color: "#e6e6cc"
  },
  {
    blockNumber: 2,
    xRatio: 0.1111111111111111,
    yRatio: 0,
    wRatio: 0.22222222222222224,
    hRatio: 1,
    color: "#dededc"
  },
  {
    blockNumber: 3,
    xRatio: 0.3333333333333333,
    yRatio: 0,
    wRatio: 0.4444444444444444,
    hRatio: 0.3333333333333333,
    color: "#9fa693"
  },
  {
    blockNumber: 4,
    xRatio: 0.3333333333333333,
    yRatio: 0.3333333333333333,
    wRatio: 0.4444444444444444,
    hRatio: 0.6666666666666666,
    color: "#FAFAFA"
  },
  {
    blockNumber: 5,
    xRatio: 0.7777777777777777,
    yRatio: 0,
    wRatio: 0.22222222222222227,
    hRatio: 1,
    color: "#808270"
  }
];

const layout = document.getElementById("layout");

blocks.forEach(block => {
  const div = document.createElement("div");
  div.classList.add("block");

  div.style.left = `${block.xRatio * 100}%`;
  div.style.width = `${block.wRatio * 100}%`;

  // Scale y and height based on layoutHeight
  div.style.top = `${block.yRatio * layoutHeight}vh`;
  div.style.height = `${block.hRatio * layoutHeight}vh`;

  div.style.backgroundColor = block.color;

  layout.appendChild(div);
});
