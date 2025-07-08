import Mock from 'mockjs'
import pageApi from '../api/mockData/pageApi'

Mock.mock(/api\/user\/getBanner/, 'get', pageApi.getBanner)