import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../assets/components/layout';
import SingleColumn from '../../assets/components/singleColumn';
import Blockquote from '../../assets/components/partials/Blockquote';
import cbt from '../../assets/images/cbt-new.png';

const AboutPsychotherapy = () => {
  return (
    <>
      <Head>
        <title>About Psychotherapy | Wolf River Psychological Services</title>
      </Head>
      <Layout page="about">
        <SingleColumn sectionId="aboutIntro">
          <h5 className="h1">About Psychotherapy:</h5>
          <p>What is Cognitive Behavioral Psychotherapy?</p>

          <p>Cognitive Behavioral Therapy, or CBT, is a solution-focused treatment approach that relies on examining the interaction between an individual’s thoughts, emotions and behaviors.  The goal of therapy is to identify problematic patterns of thinking that have a negative impact on the client’s mood and behavior.  This is accomplished through discussing a client’s interactions with the world, and then making changes through the development of new thought patterns and behaviors.  The process of therapy is highly interactive between the therapist and client, and relies on information gained in session as well as practicing new skills outside of session. </p>

        </SingleColumn>
        <SingleColumn sectionId="aboutImg">
          <Image src={cbt} layout="fixed" width="400" height="393" title="CBT Image" />
        </SingleColumn>

        <SingleColumn sectionId="secondaryContent">
        While I primarily work from a Cognitive Behavioral therapeutic approach, I often draw from other theoretical orientations when indicated.</SingleColumn>

        <SingleColumn sectionId="aboutQuote">
          <Blockquote attribution="Lane Pederson">Emotions are not good, bad, right or wrong. The first step to changing our relationship to feelings is to be curious about them and the messages they send to us.</Blockquote>
        </SingleColumn>
      </Layout>
    </>

  )
}

export default AboutPsychotherapy;