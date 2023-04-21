export default function scrollViewTo(position: any) {
  const project: any = document.getElementById(position);
  project?.scrollIntoView();
}
