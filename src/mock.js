import Mock from 'mockjs';

Mock.mock("/api/test", 'get', () => {

    return Mock.mock({
        test: "test"
    })
});