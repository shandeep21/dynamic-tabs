import Tabs from "./tabs";

export default function TabInput() {
  function TabItem() {
    return <div>This is Tab-3</div>;
  }
  const tabsContent = [
    {
      label: "Tab-1",
      content: <div>This is Tab-1</div>,
    },
    {
      label: "Tab-2",
      content: <div>This is Tab-2</div>,
    },
    {
      label: "Tab-3",
      content: <TabItem />,
    },
  ];

  function handleOnChange(currentIndex) {
    console.log(currentIndex);
  }
  return <Tabs tabsContent={tabsContent} onChange={handleOnChange} />;
}
