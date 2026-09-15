import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Package,
  Smartphone,
  Users,
  TrendingUp,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import WelcomeUI from "./assets/swiftgo/WelcomeUI.png";
import LoginUI from "./assets/swiftgo/LoginUI.png";
import DeliveryHomeUI from "./assets/swiftgo/DeliveryHomeUI.png";

function SwiftGoCaseStudy() {
  const journey = [
    {
      number: "01",
      title: "Create an account",
      text: "Customers can quickly create an account or sign in before making a delivery request.",
    },
    {
      number: "02",
      title: "Enter delivery details",
      text: "Users provide pickup and destination information together with the package details.",
    },
    {
      number: "03",
      title: "Confirm delivery",
      text: "The delivery request is reviewed before the customer proceeds with the booking.",
    },
    {
      number: "04",
      title: "Track the delivery",
      text: "The future product experience connects customers with delivery progress and driver updates.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Simple",
      text: "Reduce the number of steps required to request a delivery.",
    },
    {
      number: "02",
      title: "Local",
      text: "Design around the realities of Nigerian customers, vendors and small businesses.",
    },
    {
      number: "03",
      title: "Reliable",
      text: "Give customers visibility and confidence throughout the delivery journey.",
    },
    {
      number: "04",
      title: "Scalable",
      text: "Build the foundation for maps, payments, tracking and a driver ecosystem.",
    },
  ];

  const customers = [
    "Instagram vendors",
    "Online stores",
    "Restaurants",
    "Pharmacies",
    "Fashion businesses",
    "Supermarkets",
    "Electronics sellers",
    "Small businesses",
    "Individuals",
  ];

  const growthStrategies = [
    {
      number: "01",
      title: "Vendor acquisition",
      text: "Target online sellers and small businesses that already receive orders but need a dependable last-mile delivery option.",
    },
    {
      number: "02",
      title: "WhatsApp lead generation",
      text: "Use WhatsApp as a low-friction channel for delivery enquiries, customer support and repeat orders.",
    },
    {
      number: "03",
      title: "Local visibility",
      text: "Build local search presence around delivery-related searches and high-demand areas.",
    },
    {
      number: "04",
      title: "Customer retention",
      text: "Use reliable service, delivery history and simple re-ordering to turn one-time users into repeat customers.",
    },
  ];

  const roadmap = [
    "Google Maps & location services",
    "Automatic fare calculation",
    "Firebase authentication",
    "Real-time delivery tracking",
    "Driver-side application",
    "Delivery matching",
    "Push notifications",
    "Digital payment integration",
  ];

  const metrics = [
    {
      value: "01",
      title: "Conversion",
      text: "Visitors who become delivery customers.",
    },
    {
      value: "02",
      title: "Repeat usage",
      text: "Customers returning for additional deliveries.",
    },
    {
      value: "03",
      title: "Lead generation",
      text: "WhatsApp enquiries and delivery requests.",
    },
    {
      value: "04",
      title: "Fulfillment",
      text: "Time from request to successful delivery.",
    },
  ];

  return (
    <div className="swiftgo-case-study">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .swiftgo-case-study {
          --black: #111111;
          --soft-black: #181818;
          --white: #ffffff;
          --off-white: #f5f5f2;
          --light: #ededeb;
          --gray: #777777;
          --dark-gray: #414141;
          --line: #dcdcd8;
          --accent: #b8ff00;

          background: var(--off-white);
          color: var(--black);
          min-height: 100vh;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          overflow-x: hidden;
        }

        .swiftgo-case-study a {
          color: inherit;
          text-decoration: none;
        }

        .swiftgo-nav {
          height: 82px;
          padding: 0 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
          background: rgba(245, 245, 242, 0.95);
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
        }

        .swiftgo-nav-left,
        .swiftgo-nav-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .swiftgo-back {
          width: 42px;
          height: 42px;
          border: 1px solid var(--line);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .swiftgo-back:hover {
          background: var(--black);
          color: white;
          transform: translateX(-3px);
        }

        .swiftgo-logo {
          font-size: 19px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .swiftgo-nav-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gray);
        }

        .swiftgo-hero {
          padding: 100px 5vw 80px;
          min-height: 720px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .swiftgo-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gray);
        }

        .swiftgo-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--black);
        }

        .swiftgo-hero-title {
          margin: 100px 0 35px;
          max-width: 1250px;
          font-size: clamp(72px, 13vw, 190px);
          line-height: 0.8;
          letter-spacing: -0.085em;
          font-weight: 900;
        }

        .swiftgo-hero-title span {
          display: block;
        }

        .swiftgo-hero-title .muted {
          color: #b0b0ad;
        }

        .swiftgo-hero-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1100px;
          margin-left: auto;
        }

        .swiftgo-hero-description {
          font-size: 23px;
          line-height: 1.35;
          letter-spacing: -0.03em;
          max-width: 600px;
        }

        .swiftgo-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .swiftgo-meta-item {
          border-top: 1px solid var(--black);
          padding-top: 13px;
        }

        .swiftgo-meta-label {
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          color: var(--gray);
          margin-bottom: 8px;
        }

        .swiftgo-meta-value {
          font-size: 14px;
          font-weight: 700;
        }

        .swiftgo-showcase {
          background: var(--black);
          color: white;
          padding: 110px 5vw;
        }

        .swiftgo-section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 55px;
        }

        .swiftgo-section-label span {
          color: inherit;
        }

        .swiftgo-showcase-heading {
          max-width: 950px;
          font-size: clamp(42px, 7vw, 92px);
          line-height: 0.92;
          letter-spacing: -0.065em;
          margin: 0 0 90px;
        }

        .swiftgo-showcase-heading em {
          font-style: normal;
          color: #888;
        }

        .swiftgo-phone-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: end;
          gap: 35px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .swiftgo-phone {
          background: #202020;
          padding: 14px;
          border-radius: 38px;
          border: 1px solid #353535;
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.35);
          transition: 0.35s ease;
        }

        .swiftgo-phone:nth-child(2) {
          transform: translateY(-55px);
        }

        .swiftgo-phone:hover {
          transform: translateY(-15px);
        }

        .swiftgo-phone:nth-child(2):hover {
          transform: translateY(-70px);
        }

        .swiftgo-phone img {
          width: 100%;
          display: block;
          border-radius: 28px;
        }

        .swiftgo-phone-caption {
          padding: 20px 7px 8px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          font-size: 12px;
        }

        .swiftgo-phone-caption span:last-child {
          color: #777;
        }

        .swiftgo-section {
          padding: 125px 5vw;
        }

        .swiftgo-section-header {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 60px;
          margin-bottom: 90px;
        }

        .swiftgo-section-number {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--gray);
        }

        .swiftgo-section-title {
          margin: 0;
          font-size: clamp(44px, 6.5vw, 88px);
          line-height: 0.92;
          letter-spacing: -0.065em;
          max-width: 950px;
        }

        .swiftgo-section-title .muted {
          color: #a4a4a0;
        }

        .swiftgo-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          max-width: 1100px;
          margin-left: auto;
        }

        .swiftgo-large-copy {
          font-size: 28px;
          line-height: 1.25;
          letter-spacing: -0.035em;
        }

        .swiftgo-body-copy {
          color: #666;
          font-size: 16px;
          line-height: 1.75;
        }

        .swiftgo-dark-section {
          background: var(--black);
          color: white;
          padding: 125px 5vw;
        }

        .swiftgo-dark-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: end;
        }

        .swiftgo-dark-title {
          margin: 0;
          font-size: clamp(48px, 7vw, 100px);
          line-height: 0.88;
          letter-spacing: -0.07em;
          max-width: 800px;
        }

        .swiftgo-dark-title span {
          color: #777;
        }

        .swiftgo-challenges {
          border-top: 1px solid #333;
        }

        .swiftgo-challenge {
          padding: 28px 0;
          border-bottom: 1px solid #333;
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 20px;
        }

        .swiftgo-challenge-number {
          color: #777;
          font-size: 12px;
        }

        .swiftgo-challenge-title {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .swiftgo-challenge-text {
          color: #999;
          line-height: 1.6;
          font-size: 14px;
        }

        .swiftgo-principles {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--line);
        }

        .swiftgo-principle {
          padding: 45px 35px 45px 0;
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 20px;
        }

        .swiftgo-principle:nth-child(odd) {
          border-right: 1px solid var(--line);
          padding-right: 55px;
        }

        .swiftgo-principle:nth-child(even) {
          padding-left: 55px;
        }

        .swiftgo-principle-number {
          font-size: 12px;
          color: var(--gray);
        }

        .swiftgo-principle h3 {
          font-size: 27px;
          letter-spacing: -0.04em;
          margin: 0 0 10px;
        }

        .swiftgo-principle p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .swiftgo-ui-section {
          background: #e7e7e4;
          padding: 125px 5vw;
        }

        .swiftgo-ui-header {
          display: flex;
          justify-content: space-between;
          gap: 50px;
          align-items: end;
          margin-bottom: 70px;
        }

        .swiftgo-ui-heading {
          font-size: clamp(48px, 7vw, 100px);
          line-height: 0.85;
          letter-spacing: -0.075em;
          margin: 0;
        }

        .swiftgo-ui-intro {
          max-width: 380px;
          color: #666;
          line-height: 1.6;
        }

        .swiftgo-ui-showcase {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 45px;
          align-items: center;
        }

        .swiftgo-ui-main {
          background: white;
          padding: 25px;
          border-radius: 24px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);
        }

        .swiftgo-ui-main img {
          width: 100%;
          display: block;
          border-radius: 15px;
        }

        .swiftgo-ui-side {
          display: grid;
          gap: 25px;
        }

        .swiftgo-ui-card {
          background: white;
          padding: 25px;
          border-radius: 24px;
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 25px;
          align-items: center;
        }

        .swiftgo-ui-card img {
          width: 100%;
          border-radius: 14px;
        }

        .swiftgo-ui-card h3 {
          margin: 0 0 7px;
          font-size: 20px;
          letter-spacing: -0.03em;
        }

        .swiftgo-ui-card p {
          margin: 0;
          color: #777;
          font-size: 13px;
          line-height: 1.55;
        }

        .swiftgo-journey {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .swiftgo-journey-card {
          padding: 35px 30px 45px 0;
          border-right: 1px solid var(--line);
          margin-right: 30px;
        }

        .swiftgo-journey-card:last-child {
          border-right: 0;
          margin-right: 0;
        }

        .swiftgo-journey-number {
          display: inline-flex;
          width: 34px;
          height: 34px;
          border: 1px solid var(--black);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          margin-bottom: 35px;
        }

        .swiftgo-journey-card h3 {
          font-size: 20px;
          letter-spacing: -0.03em;
          margin: 0 0 12px;
        }

        .swiftgo-journey-card p {
          color: #707070;
          line-height: 1.6;
          font-size: 14px;
          margin: 0;
        }

        .swiftgo-customers {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          max-width: 1000px;
          margin-left: auto;
        }

        .swiftgo-customer {
          border: 1px solid #cfcfcb;
          padding: 15px 19px;
          border-radius: 100px;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .swiftgo-customer:hover {
          background: var(--black);
          color: white;
          border-color: var(--black);
          transform: translateY(-3px);
        }

        .swiftgo-growth {
          background: var(--black);
          color: white;
          padding: 125px 5vw;
        }

        .swiftgo-growth .swiftgo-section-label {
          color: #777;
        }

        .swiftgo-growth-title {
          max-width: 900px;
          margin: 0 0 85px;
          font-size: clamp(50px, 7vw, 100px);
          line-height: 0.87;
          letter-spacing: -0.07em;
        }

        .swiftgo-growth-title span {
          color: #777;
        }

        .swiftgo-growth-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid #333;
        }

        .swiftgo-growth-card {
          padding: 40px 45px 45px 0;
          border-bottom: 1px solid #333;
        }

        .swiftgo-growth-card:nth-child(odd) {
          border-right: 1px solid #333;
          padding-right: 55px;
        }

        .swiftgo-growth-card:nth-child(even) {
          padding-left: 55px;
        }

        .swiftgo-growth-number {
          color: #777;
          font-size: 11px;
          letter-spacing: 0.1em;
          margin-bottom: 30px;
        }

        .swiftgo-growth-card h3 {
          font-size: 25px;
          letter-spacing: -0.035em;
          margin: 0 0 13px;
        }

        .swiftgo-growth-card p {
          color: #999;
          line-height: 1.65;
          max-width: 500px;
          margin: 0;
        }

        .swiftgo-role-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .swiftgo-role-copy {
          font-size: 31px;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .swiftgo-role-list {
          border-top: 1px solid var(--line);
        }

        .swiftgo-role-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 19px 0;
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }

        .swiftgo-role-item svg {
          width: 17px;
          height: 17px;
        }

        .swiftgo-tech {
          margin-top: 75px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .swiftgo-tech span {
          background: var(--black);
          color: white;
          border-radius: 100px;
          padding: 12px 16px;
          font-size: 12px;
        }

        .swiftgo-roadmap {
          background: #dededb;
          padding: 125px 5vw;
        }

        .swiftgo-roadmap-title {
          max-width: 850px;
          font-size: clamp(50px, 7vw, 100px);
          line-height: 0.87;
          letter-spacing: -0.07em;
          margin: 0 0 80px;
        }

        .swiftgo-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #bbb;
        }

        .swiftgo-roadmap-item {
          padding: 30px 25px 30px 0;
          border-bottom: 1px solid #bbb;
          font-size: 14px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .swiftgo-roadmap-item svg {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
        }

        .swiftgo-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
        }

        .swiftgo-metric {
          padding: 35px 30px 35px 0;
          border-right: 1px solid var(--line);
          margin-right: 30px;
        }

        .swiftgo-metric:last-child {
          border-right: 0;
          margin-right: 0;
        }

        .swiftgo-metric-number {
          font-size: 10px;
          color: var(--gray);
          margin-bottom: 45px;
        }

        .swiftgo-metric h3 {
          font-size: 25px;
          margin: 0 0 10px;
          letter-spacing: -0.03em;
        }

        .swiftgo-metric p {
          color: #777;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        .swiftgo-final {
          background: var(--black);
          color: white;
          padding: 150px 5vw;
          text-align: center;
        }

        .swiftgo-final-small {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #777;
          margin-bottom: 45px;
        }

        .swiftgo-final-title {
          max-width: 1150px;
          margin: auto;
          font-size: clamp(55px, 8vw, 120px);
          line-height: 0.85;
          letter-spacing: -0.075em;
        }

        .swiftgo-final-title span {
          color: #777;
        }

        .swiftgo-final-text {
          max-width: 580px;
          margin: 45px auto 0;
          color: #999;
          line-height: 1.7;
          font-size: 15px;
        }

        .swiftgo-footer {
          background: var(--black);
          color: white;
          border-top: 1px solid #333;
          padding: 30px 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #777;
        }

        .swiftgo-footer a {
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .swiftgo-hero {
            min-height: auto;
            padding-top: 75px;
          }

          .swiftgo-hero-title {
            margin-top: 80px;
          }

          .swiftgo-hero-bottom,
          .swiftgo-overview-grid,
          .swiftgo-dark-grid,
          .swiftgo-role-grid,
          .swiftgo-ui-showcase {
            grid-template-columns: 1fr;
          }

          .swiftgo-phone-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 15px;
          }

          .swiftgo-phone {
            padding: 8px;
            border-radius: 25px;
          }

          .swiftgo-phone img {
            border-radius: 18px;
          }

          .swiftgo-phone:nth-child(2) {
            transform: translateY(-25px);
          }

          .swiftgo-journey {
            grid-template-columns: repeat(2, 1fr);
          }

          .swiftgo-journey-card:nth-child(2) {
            border-right: 0;
          }

          .swiftgo-growth-grid {
            grid-template-columns: 1fr;
          }

          .swiftgo-growth-card:nth-child(odd) {
            border-right: 0;
            padding-right: 0;
          }

          .swiftgo-growth-card:nth-child(even) {
            padding-left: 0;
          }

          .swiftgo-roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .swiftgo-metrics {
            grid-template-columns: repeat(2, 1fr);
          }

          .swiftgo-ui-header {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .swiftgo-nav {
            height: 70px;
            padding: 0 20px;
          }

          .swiftgo-nav-label {
            display: none;
          }

          .swiftgo-hero,
          .swiftgo-section,
          .swiftgo-showcase,
          .swiftgo-dark-section,
          .swiftgo-ui-section,
          .swiftgo-growth,
          .swiftgo-roadmap,
          .swiftgo-final {
            padding-left: 20px;
            padding-right: 20px;
          }

          .swiftgo-hero {
            padding-top: 60px;
            padding-bottom: 65px;
          }

          .swiftgo-hero-title {
            font-size: 70px;
            margin: 80px 0 45px;
          }

          .swiftgo-hero-bottom {
            gap: 50px;
          }

          .swiftgo-hero-description {
            font-size: 21px;
          }

          .swiftgo-meta {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .swiftgo-showcase-heading,
          .swiftgo-section-title,
          .swiftgo-growth-title,
          .swiftgo-roadmap-title {
            font-size: 53px;
          }

          .swiftgo-phone-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
          }

          .swiftgo-phone:nth-child(2) {
            transform: none;
          }

          .swiftgo-phone:nth-child(2):hover,
          .swiftgo-phone:hover {
            transform: translateY(-7px);
          }

          .swiftgo-section-header {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 60px;
          }

          .swiftgo-overview-grid {
            gap: 45px;
          }

          .swiftgo-large-copy,
          .swiftgo-role-copy {
            font-size: 25px;
          }

          .swiftgo-principles {
            grid-template-columns: 1fr;
          }

          .swiftgo-principle,
          .swiftgo-principle:nth-child(odd),
          .swiftgo-principle:nth-child(even) {
            border-right: 0;
            padding: 35px 0;
          }

          .swiftgo-journey {
            grid-template-columns: 1fr;
          }

          .swiftgo-journey-card {
            border-right: 0;
            border-bottom: 1px solid var(--line);
            margin-right: 0;
            padding-right: 0;
          }

          .swiftgo-ui-card {
            grid-template-columns: 75px 1fr;
          }

          .swiftgo-roadmap-grid,
          .swiftgo-metrics {
            grid-template-columns: 1fr;
          }

          .swiftgo-roadmap-item {
            padding-right: 0;
          }

          .swiftgo-metric {
            border-right: 0;
            border-bottom: 1px solid var(--line);
            margin-right: 0;
            padding-right: 0;
          }

          .swiftgo-footer {
            padding: 25px 20px;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="swiftgo-nav">
        <div className="swiftgo-nav-left">
          <Link to="/" className="swiftgo-back" aria-label="Back to portfolio">
            <ArrowLeft size={17} />
          </Link>

          <div className="swiftgo-logo">FARUK.</div>
        </div>

        <div className="swiftgo-nav-right">
          <span className="swiftgo-nav-label">Case Study / 02</span>
          <span className="swiftgo-nav-label">SwiftGo</span>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="swiftgo-hero">
          <div className="swiftgo-kicker">
            <span className="swiftgo-kicker-dot"></span>
            Digital Product Case Study
          </div>

          <h1 className="swiftgo-hero-title">
            <span>SwiftGo</span>
            <span className="muted">Parcel</span>
            <span>Delivery.</span>
          </h1>

          <div className="swiftgo-hero-bottom">
            <p className="swiftgo-hero-description">
              A mobile-first parcel delivery experience designed to make
              sending packages simpler for individuals, vendors and growing
              businesses.
            </p>

            <div className="swiftgo-meta">
              <div className="swiftgo-meta-item">
                <span className="swiftgo-meta-label">Role</span>
                <span className="swiftgo-meta-value">
                  Product / UI / Marketing
                </span>
              </div>

              <div className="swiftgo-meta-item">
                <span className="swiftgo-meta-label">Year</span>
                <span className="swiftgo-meta-value">2026</span>
              </div>

              <div className="swiftgo-meta-item">
                <span className="swiftgo-meta-label">Type</span>
                <span className="swiftgo-meta-value">
                  Self-Initiated Product
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section className="swiftgo-showcase">
          <div className="swiftgo-section-label">
            <span>01</span>
            Product Interface
          </div>

          <h2 className="swiftgo-showcase-heading">
            Built around the idea that
            <br />
            <em>delivery should feel simple.</em>
          </h2>

          <div className="swiftgo-phone-grid">
            <div className="swiftgo-phone">
              <img src={WelcomeUI} alt="SwiftGo welcome interface" />
              <div className="swiftgo-phone-caption">
                <span>Welcome</span>
                <span>01 / 03</span>
              </div>
            </div>

            <div className="swiftgo-phone">
              <img src={LoginUI} alt="SwiftGo login interface" />
              <div className="swiftgo-phone-caption">
                <span>Authentication</span>
                <span>02 / 03</span>
              </div>
            </div>

            <div className="swiftgo-phone">
              <img
                src={DeliveryHomeUI}
                alt="SwiftGo delivery home interface"
              />
              <div className="swiftgo-phone-caption">
                <span>Delivery Home</span>
                <span>03 / 03</span>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="swiftgo-section">
          <div className="swiftgo-section-header">
            <span className="swiftgo-section-number">02 / Overview</span>

            <h2 className="swiftgo-section-title">
              Making local delivery
              <span className="muted"> easier to understand.</span>
            </h2>
          </div>

          <div className="swiftgo-overview-grid">
            <p className="swiftgo-large-copy">
              SwiftGo is a proposed parcel delivery platform connecting
              customers and businesses with reliable delivery services.
            </p>

            <div>
              <p className="swiftgo-body-copy">
                The concept was designed around a common problem: people and
                small businesses frequently need to send packages but the
                delivery process can feel fragmented, unclear and difficult to
                track.
              </p>

              <p className="swiftgo-body-copy">
                SwiftGo brings the experience into one mobile product — from
                creating an account and entering delivery details to eventually
                matching customers with riders/drivers and tracking their packages.
              </p>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="swiftgo-dark-section">
          <div className="swiftgo-section-label">
            <span>03</span>
            The Challenge
          </div>

          <div className="swiftgo-dark-grid">
            <h2 className="swiftgo-dark-title">
              Moving a package
              <br />
              shouldn't feel
              <br />
              <span>complicated.</span>
            </h2>

            <div className="swiftgo-challenges">
              <div className="swiftgo-challenge">
                <span className="swiftgo-challenge-number">01</span>
                <div>
                  <div className="swiftgo-challenge-title">
                    Fragmented delivery experience
                  </div>
                  <div className="swiftgo-challenge-text">
                    Customers often move between calls, chats and different
                    channels just to arrange a delivery.
                  </div>
                </div>
              </div>

              <div className="swiftgo-challenge">
                <span className="swiftgo-challenge-number">02</span>
                <div>
                  <div className="swiftgo-challenge-title">
                    Limited visibility
                  </div>
                  <div className="swiftgo-challenge-text">
                    Customers want to know what is happening with their
                    package after making a request.
                  </div>
                </div>
              </div>

              <div className="swiftgo-challenge">
                <span className="swiftgo-challenge-number">03</span>
                <div>
                  <div className="swiftgo-challenge-title">
                    Small businesses need speed
                  </div>
                  <div className="swiftgo-challenge-text">
                    Online vendors need delivery to fit naturally into their
                    existing order and customer service workflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="swiftgo-section">
          <div className="swiftgo-section-header">
            <span className="swiftgo-section-number">04 / Approach</span>

            <h2 className="swiftgo-section-title">
              Four principles
              <span className="muted"> shaped the experience.</span>
            </h2>
          </div>

          <div className="swiftgo-principles">
            {principles.map((item) => (
              <div className="swiftgo-principle" key={item.number}>
                <span className="swiftgo-principle-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UI SHOWCASE */}
        <section className="swiftgo-ui-section">
          <div className="swiftgo-section-label">
            <span>05</span>
            UI / UX
          </div>

          <div className="swiftgo-ui-header">
            <h2 className="swiftgo-ui-heading">
              From first tap
              <br />
              to delivery.
            </h2>

            <p className="swiftgo-ui-intro">
              The interface is intentionally focused on clarity. Users should
              immediately understand what SwiftGo does and where to start.
            </p>
          </div>

          <div className="swiftgo-ui-showcase">
            <div className="swiftgo-ui-main">
              <img
                src={DeliveryHomeUI}
                alt="SwiftGo delivery home screen"
              />
            </div>

            <div className="swiftgo-ui-side">
              <div className="swiftgo-ui-card">
                <img src={WelcomeUI} alt="SwiftGo welcome screen" />

                <div>
                  <h3>Clear introduction</h3>
                  <p>
                    The welcome experience introduces the product without
                    overwhelming a new customer.
                  </p>
                </div>
              </div>

              <div className="swiftgo-ui-card">
                <img src={LoginUI} alt="SwiftGo login screen" />

                <div>
                  <h3>Low-friction access</h3>
                  <p>
                    Authentication is kept simple so customers can get into
                    the delivery experience quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="swiftgo-section">
          <div className="swiftgo-section-header">
            <span className="swiftgo-section-number">06 / Journey</span>

            <h2 className="swiftgo-section-title">
              A delivery journey
              <span className="muted"> with fewer questions.</span>
            </h2>
          </div>

          <div className="swiftgo-journey">
            {journey.map((item) => (
              <div className="swiftgo-journey-card" key={item.number}>
                <span className="swiftgo-journey-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET MARKET */}
        <section className="swiftgo-section">
          <div className="swiftgo-section-header">
            <span className="swiftgo-section-number">07 / Audience</span>

            <h2 className="swiftgo-section-title">
              Built for the people
              <span className="muted"> already moving products.</span>
            </h2>
          </div>

          <div className="swiftgo-customers">
            {customers.map((customer) => (
              <span className="swiftgo-customer" key={customer}>
                {customer}
              </span>
            ))}
          </div>
        </section>

        {/* MARKETING */}
        <section className="swiftgo-growth">
          <div className="swiftgo-section-label">
            <span>08</span>
            Growth Strategy
          </div>

          <h2 className="swiftgo-growth-title">
            The product is only
            <br />
            half the story.
            <br />
            <span>Distribution matters.</span>
          </h2>

          <div className="swiftgo-growth-grid">
            {growthStrategies.map((item) => (
              <div className="swiftgo-growth-card" key={item.number}>
                <div className="swiftgo-growth-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ROLE */}
        <section className="swiftgo-section">
          <div className="swiftgo-section-header">
            <span className="swiftgo-section-number">09 / My Role</span>

            <h2 className="swiftgo-section-title">
              From product concept
              <span className="muted"> to growth thinking.</span>
            </h2>
          </div>

          <div className="swiftgo-role-grid">
            <p className="swiftgo-role-copy">
              I approached SwiftGo as both a product design challenge and a
              digital marketing opportunity.
            </p>

            <div className="swiftgo-role-list">
              <div className="swiftgo-role-item">
                <CheckCircle2 />
                Product concept & user flow
              </div>

              <div className="swiftgo-role-item">
                <CheckCircle2 />
                Mobile UI / UX design
              </div>

              <div className="swiftgo-role-item">
                <CheckCircle2 />
                React Native development
              </div>

              <div className="swiftgo-role-item">
                <CheckCircle2 />
                Digital marketing strategy
              </div>

              <div className="swiftgo-role-item">
                <CheckCircle2 />
                Customer acquisition planning
              </div>
            </div>
          </div>

          <div className="swiftgo-tech">
            <span>React Native</span>
            <span>Expo</span>
            <span>Expo Router</span>
            <span>JavaScript</span>
            <span>Firebase</span>
            <span>Google Maps</span>
            <span>UI / UX</span>
            <span>Digital Marketing</span>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="swiftgo-roadmap">
          <div className="swiftgo-section-label">
            <span>10</span>
            Product Roadmap
          </div>

          <h2 className="swiftgo-roadmap-title">
            The next version
            <br />
            gets <span>smarter.</span>
          </h2>

          <div className="swiftgo-roadmap-grid">
            {roadmap.map((item) => (
              <div className="swiftgo-roadmap-item" key={item}>
                <CheckCircle2 />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* METRICS */}
        <section className="swiftgo-section">
          <div className="swiftgo-section-header">
            <span className="swiftgo-section-number">11 / Measurement</span>

            <h2 className="swiftgo-section-title">
              Designing for
              <span className="muted"> measurable growth.</span>
            </h2>
          </div>

          <div className="swiftgo-metrics">
            {metrics.map((metric) => (
              <div className="swiftgo-metric" key={metric.number}>
                <div className="swiftgo-metric-number">
                  {metric.value}
                </div>

                <h3>{metric.title}</h3>

                <p>{metric.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL */}
        <section className="swiftgo-final">
          <div className="swiftgo-final-small">
            Final Takeaway
          </div>

          <h2 className="swiftgo-final-title">
            Delivery is not just about
            <br />
            moving a package.
            <br />
            <span>It's about removing friction.</span>
          </h2>

          <p className="swiftgo-final-text">
            SwiftGo demonstrates how product design, technology and digital
            marketing can work together to turn an everyday logistics problem
            into a simple, scalable customer experience.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="swiftgo-footer">
        <span>SwiftGo / Case Study 02</span>

        <Link to="/">
          Back to Portfolio
          <ArrowUpRight size={14} />
        </Link>
      </footer>
    </div>
  );
}

export default SwiftGoCaseStudy;