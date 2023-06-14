// This folder structure means that the component in app/layout.js now accepts the @analytics and @team slots props, and can render them in parallel alongside the children prop.

// export default function Layout(props: {
//   children: React.ReactNode;
//   analytics: React.ReactNode;
//   team: React.ReactNode;
// }) {
//   return (
//     <>
//       {props.children}
//       {props.team}
//       {props.analytics}
//     </>
//   );
// }
