import React from 'react'
import ScrollReveal from "scrollreveal";
export default class Topic extends React.Component {
  refs = React.createRef();
  componentDidMount() {
    const leftAnimation = {
      origin: "left",
      duration: 1000,
      delay: 150,
      distance: "31.25rem",
      scale: 1,
      easing: "ease",
    };
    ScrollReveal().reveal(this.refs.topic, leftAnimation);
  }

  render() {
    return (
      <div
        class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40"
        ref="topic"
      >
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="max-w-2xl" style={{ opacity: 1, transform: "none" }}>
            <h2>
              <span class="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                Empowering the Future through Technological Advancement
              </span>
            </h2>
            <div class="mt-6 text-xl text-neutral-600">
              <p>
                We believe technology is the answer to the world’s greatest
                challenges. It’s also the cause, so we find ourselves in bit of
                a catch 22 situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
