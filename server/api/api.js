export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event);
    
    // 这里可以根据id从数据库或其他数据源获取数据
    const cardData = {
      title: `Card ${id} Title`,
      date: new Date().toLocaleDateString(),
      description: `Details for card ${id}...`,
      phone: '+30 210 4099100',
      email: `card${id}@pct.com.gr`
    };
    
    return {
      data: cardData
    };
  });