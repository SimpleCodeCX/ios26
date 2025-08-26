const main = () => {
    // 测试 localStorage 设置
    console.log('开始 localStorage 测试...');
    
    // 设置数据
    localStorage.setItem('testKey', 'testValue');
    localStorage.setItem('userName', '张三');
    localStorage.setItem('userAge', '25');
    
    // 获取数据
    const testValue = localStorage.getItem('testKey');
    const userName = localStorage.getItem('userName');
    const userAge = localStorage.getItem('userAge');
    
    console.log('获取的数据:', {
        testKey: testValue,
        userName: userName,
        userAge: userAge
    });
    
    // 检查数据是否存在
    const hasTestKey = localStorage.hasOwnProperty('testKey');
    console.log('testKey 是否存在:', hasTestKey);
    
    // 获取所有 localStorage 键
    const allKeys = Object.keys(localStorage);
    console.log('所有 localStorage 键:', allKeys);
    
    // 获取 localStorage 长度
    const storageLength = localStorage.length;
    console.log('localStorage 长度:', storageLength);
    
    // 删除特定数据
    localStorage.removeItem('testKey');
    console.log('删除 testKey 后，testKey 的值:', localStorage.getItem('testKey'));
    
    // 清空所有数据
    // localStorage.clear();
    // console.log('清空后 localStorage 长度:', localStorage.length);
    
    console.log('localStorage 测试完成！');
}

main();