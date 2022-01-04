import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styles } from "../styles/Home.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    document.querySelector("body").classList.add("body-hero");
  });

  return (
    <>
      <Head>
        <title>
          Pursuit Cycles ≫ Custom Carbon Road and All-Road/Gravel Bikes -
          Pursuit Cycles
        </title>
      </Head>

      <Header inView={inView} hasHero={true} />

      <main id="main">
        <section className="full hero" ref={ref}>
          <Image
            src="https://www.pursuitcycles.com/wp-content/uploads/2021/12/DSC6029Pascal-Beauvais-info@pascalbeauvais.com-406-599-1472_-1.jpg"
            alt=""
            loading="lazy"
            width={1280}
            height={851}
          />
        </section>

        <section>
          <div className="wrapper">
            <h1>Hello World!</h1>
            <p>
              Donec commodo mi at efficitur semper. Sed tristique sollicitudin
              vulputate. Etiam a leo varius, viverra ante quis, fermentum eros.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec eleifend auctor diam. Nam congue
              augue non mauris fringilla condimentum. Vivamus eu enim ante.
              Pellentesque volutpat fermentum turpis sed maximus. Praesent eget
              nisi blandit, accumsan dui lacinia, aliquam arcu. Pellentesque
              ullamcorper ex a cursus finibus. Suspendisse molestie dui in eros
              gravida, ut aliquet lacus placerat. Vivamus vitae lacus elit. In
              viverra elit diam, non eleifend elit blandit sed. Maecenas eget
              augue in eros viverra luctus. Maecenas lobortis mi a faucibus
              blandit. Pellentesque sodales condimentum urna sit amet eleifend.
            </p>
            <p>
              Integer in ex sollicitudin, pellentesque libero sit amet, finibus
              nunc. Praesent augue orci, porttitor nec felis nec, tempus
              hendrerit tortor. Suspendisse tempor molestie massa at ornare.
              Nunc bibendum lacinia luctus. Etiam lacinia eu neque non
              porttitor. Nam viverra neque vitae metus ultricies, a fermentum
              nisl fringilla. Donec eu sem maximus, hendrerit tellus ac, posuere
              mauris. Duis tempus felis mi, vel tincidunt nulla rhoncus eu.
              Phasellus vitae sapien quis metus laoreet mollis eu in eros. Morbi
              commodo nisi eros, ac aliquam nisi bibendum id. Donec suscipit
              ultrices sem mattis commodo. In hac habitasse platea dictumst.
              Quisque et aliquet mi, ac vulputate nulla. Sed vel ligula
              volutpat, lobortis lectus ac, accumsan eros.
            </p>
            <p>
              Aenean eu ullamcorper turpis. Quisque mauris purus, placerat vel
              nisl quis, imperdiet volutpat odio. Pellentesque iaculis ante vel
              molestie venenatis. Fusce sit amet ligula pretium, pellentesque
              erat a, lacinia velit. Etiam sit amet vehicula est, at interdum
              urna. Aliquam a justo magna. Ut id faucibus leo, sit amet
              sollicitudin arcu. Proin tristique pharetra lacus, sit amet
              sollicitudin libero luctus ac. Proin id eros vel urna feugiat
              cursus vitae nec odio. Vestibulum ultricies dignissim neque id
              cursus. Donec diam nulla, suscipit tincidunt accumsan nec, sodales
              ac est. Aliquam egestas orci justo, sit amet auctor quam bibendum
              non. Proin non magna quis nisi dapibus sollicitudin eget id ante.
              Nam ullamcorper tempus eros. Aliquam et fermentum purus.
            </p>
            <p>
              Donec fringilla tempus elit. Proin ullamcorper dolor at nulla
              luctus fermentum. Fusce egestas, quam nec sagittis aliquam, dolor
              massa sagittis libero, eget dictum nibh lorem vitae diam. Praesent
              consectetur condimentum facilisis. Duis tincidunt non justo a
              condimentum. Donec at sagittis nibh. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              felis non lorem consequat fermentum. Phasellus nec ultrices purus,
              molestie tempor est. Fusce quis ligula nec arcu dignissim
              eleifend. Aliquam in dui erat. Morbi porta lacinia semper. Fusce
              id rhoncus justo, sed mattis sem. Mauris laoreet orci mi, non
              placerat magna consequat in. Vestibulum nec dictum justo, non
              tempus metus. Praesent at interdum risus. Praesent aliquam
              pharetra justo vitae fringilla. Phasellus justo sem, bibendum eget
              laoreet ac, cursus sit amet risus. Sed vel diam in arcu dapibus
              dictum eu in sapien. Suspendisse ut sollicitudin sapien.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
