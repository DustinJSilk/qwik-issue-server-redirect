import { component$ } from "@builder.io/qwik";
import { type DocumentHead, server$ } from "@builder.io/qwik-city";

const redirect = server$(function () {
  throw this.redirect(302, "/");
});

export default component$(() => {
  return (
    <>
      <button onClick$={() => redirect()}>Try redirect me</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
