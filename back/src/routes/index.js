const {Router} = require('express')
const {apiInfo} = require('../cotrollers/getApiInfo');
const { apiInfoRecord } = require('../cotrollers/getApiRecord');
const { getApiPlatformsId } = require('../cotrollers/getApiPlatformsId');
const { apiInfoResult } = require('../cotrollers/postApiResult');
const { login } = require('../cotrollers/login');
const router = Router();


router.get('/login', login)
router.get('/api/Platforms', apiInfo)
router.post('/api/Result', apiInfoResult)
router.get('/api/Records/:sensorId', apiInfoRecord)
router.get('/api/Platforms/:id', getApiPlatformsId)


module.exports = router;