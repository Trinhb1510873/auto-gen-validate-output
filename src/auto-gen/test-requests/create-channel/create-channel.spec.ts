
    import fs from 'fs';
    import path from 'path';
    import axios from 'axios';
    import { getTime, summarizeErrors, summaryFields } from '../../utils/helper';
    import { executeAllSteps, resolveVariables } from '../../utils/test-executor';
    import { TestContext } from '../../utils/text-context';
    describe('Testcase for create-channel', () => {
        let totalTests = 0;
        let passed201 = 0;
        let failedTests = [];
        let codedTest = [];
        let logicTests = [];
        let passedTests = 0
        let passed200 = 0
        let headerRequest
        let testNumber
        let failedStep = [];
        let testType
        let resolvedData, pathRequest, methodRequest, requestUrl
        let globalContext, resolvedHeader
        beforeAll( async () => {
          try {
            testType = 'request'
            globalContext = new TestContext()
            const resultStep = await executeAllSteps([{"action":"mockUser","body":{"quantity":2,"prefix":"testABACDD","badge":0}}],globalContext)
            resultStep.forEach((step) => {
              failedStep.push({
                type: step.type,
                status: step.status,
                stepName: step.stepName,
                error: step.error
              })
            })
            const hasFailure = resultStep.some(step => !step.status);
              if (hasFailure) {
                  throw new Error(`beforeAll failed: ${JSON.stringify(failedStep, null, 2)}`);
              }
            headerRequest = {"x-session-token":"{{token}}"}
            resolvedHeader = resolveVariables(headerRequest, globalContext)
            pathRequest = "/Channel/CreateChannel"
            methodRequest = "POST"
            requestUrl = `${globalThis.url}${pathRequest}`
          } catch(error){
            console.error('beforeAll failed:', error);
            throw error; // Ném lỗi để Jest dừng
          }
        })

        
           
            it('Test case #1 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 1;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #2 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 2;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #3 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 3;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #4 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 4;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #5 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 5;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #6 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 6;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #7 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 7;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #8 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 8;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #9 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 9;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #10 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 10;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #11 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 11;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #12 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 12;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #13 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 13;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #14 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 14;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #15 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 15;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #16 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 16;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #17 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 17;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #18 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 18;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #19 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 19;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #20 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 20;
              totalTests++;
              const payloadObj = {"workspaceId":123,"name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #21 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 21;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #22 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 22;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #23 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 23;
              totalTests++;
              const payloadObj = {"workspaceId":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #24 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 24;
              totalTests++;
              const payloadObj = {"workspaceId":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #25 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 25;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #26 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 26;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #27 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 27;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #28 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 28;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #29 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 29;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #30 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 30;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #31 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 31;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #32 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 32;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #33 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 33;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #34 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 34;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #35 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 35;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #36 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 36;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #37 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 37;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #38 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 38;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #39 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 39;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #40 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 40;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #41 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 41;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #42 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 42;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #43 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 43;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #44 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 44;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #45 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 45;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #46 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 46;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #47 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 47;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #48 with expect errors  ["Invalid channel"] ', async () => {
              testNumber = 48;
              totalTests++;
              const payloadObj = {"workspaceId":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Invalid channel"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #49 with expect errors  ["name must be string","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 49;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must be string","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #50 with expect errors  ["name must be string"] ', async () => {
              testNumber = 50;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must be string"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #51 with expect errors  ["name must be string","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 51;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must be string","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #52 with expect errors  ["name must be string","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 52;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must be string","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #53 with expect errors  ["channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 53;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #54 with expect errors  [] ', async () => {
              testNumber = 54;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  [].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #55 with expect errors  ["channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 55;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #56 with expect errors  ["channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 56;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #57 with expect errors  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 57;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #58 with expect errors  ["name must to range from 1 to 50 length"] ', async () => {
              testNumber = 58;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #59 with expect errors  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 59;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #60 with expect errors  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 60;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #61 with expect errors  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 61;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #62 with expect errors  ["name must to range from 1 to 50 length"] ', async () => {
              testNumber = 62;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #63 with expect errors  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 63;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #64 with expect errors  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 64;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["name must to range from 1 to 50 length","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #65 with expect errors  ["channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 65;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #66 with expect errors  [] ', async () => {
              testNumber = 66;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  [].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #67 with expect errors  ["channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 67;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #68 with expect errors  ["channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 68;
              totalTests++;
              const payloadObj = {"workspaceId":"0","name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #69 with expect errors  ["must have required property \'name\'","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 69;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["must have required property 'name'","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #70 with expect errors  ["must have required property \'name\'"] ', async () => {
              testNumber = 70;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["must have required property 'name'"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #71 with expect errors  ["must have required property \'name\'","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 71;
              totalTests++;
              const payloadObj = {"workspaceId":"0"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["must have required property 'name'","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #72 with expect errors  ["must have required property \'name\'","channelType must be equal to one of the allowed values"] ', async () => {
              testNumber = 72;
              totalTests++;
              const payloadObj = {"workspaceId":"0","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["must have required property 'name'","channelType must be equal to one of the allowed values"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #73 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 73;
              totalTests++;
              const payloadObj = {"name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #74 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 74;
              totalTests++;
              const payloadObj = {"name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #75 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 75;
              totalTests++;
              const payloadObj = {"name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #76 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 76;
              totalTests++;
              const payloadObj = {"name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #77 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 77;
              totalTests++;
              const payloadObj = {"name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #78 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 78;
              totalTests++;
              const payloadObj = {"name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #79 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 79;
              totalTests++;
              const payloadObj = {"name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #80 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 80;
              totalTests++;
              const payloadObj = {"name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #81 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 81;
              totalTests++;
              const payloadObj = {"name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #82 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 82;
              totalTests++;
              const payloadObj = {"name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #83 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 83;
              totalTests++;
              const payloadObj = {"name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #84 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 84;
              totalTests++;
              const payloadObj = {"name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #85 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 85;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #86 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 86;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #87 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 87;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #88 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 88;
              totalTests++;
              const payloadObj = {"name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #89 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 89;
              totalTests++;
              const payloadObj = {"name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #90 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 90;
              totalTests++;
              const payloadObj = {"name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #91 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 91;
              totalTests++;
              const payloadObj = {"name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #92 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 92;
              totalTests++;
              const payloadObj = {"name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #93 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 93;
              totalTests++;
              const payloadObj = {"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #94 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 94;
              totalTests++;
              const payloadObj = {"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #95 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 95;
              totalTests++;
              const payloadObj = {};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #96 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 96;
              totalTests++;
              const payloadObj = {"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #97 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 97;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #98 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 98;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #99 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 99;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #100 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 100;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":123,"channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #101 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 101;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #102 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 102;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #103 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 103;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #104 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 104;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"check_ulid","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #105 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 105;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #106 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 106;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #107 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 107;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #108 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 108;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #109 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 109;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #110 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 110;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #111 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 111;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #112 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 112;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #113 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 113;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #114 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 114;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #115 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 115;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #116 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 116;
              totalTests++;
              const payloadObj = {"workspaceId":"","name":"channel1","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #117 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 117;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelType":"invalid_enum_value"};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #118 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 118;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelType":1};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #119 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 119;
              totalTests++;
              const payloadObj = {"workspaceId":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

           
            it('Test case #120 with expect errors  ["Could not resolve permission type"] ', async () => {
              testNumber = 120;
              totalTests++;
              const payloadObj = {"workspaceId":"","channelType":""};
              resolvedData = resolveVariables(payloadObj,globalContext );
            try {
              const response = await axios.post(
                requestUrl, 
                resolvedData,
                {
                  headers: {...resolvedHeader},
                   validateStatus: () => true 
                }
              );

            const data = response.data;
            const expectJson =  ["Could not resolve permission type"].sort()

            let expectDetails;
                  let softExpectDetails;
                  switch (response.status) {
                    case 200:
                      expectDetails = Array.isArray(data?.error?.details)
                        ? data.error.details
                        : [];
                      softExpectDetails = [...expectDetails].sort();
                      try {
                        expect(expectJson).toEqual(softExpectDetails)
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 200,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
                    case 403:
                      expectDetails = Array.isArray(data) ? data : [data]; // always array
                      softExpectDetails = [...expectDetails].sort(); // optional sort if needed
                      try {
                        expect(expectJson).toEqual(softExpectDetails);
                        passedTests++
                        codedTest.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                        })
                      } catch (error) {
                        const { missing, extra } = summaryFields(softExpectDetails, expectJson);
                        failedTests.push({
                          testcase: testNumber,
                          code: 403,
                          body: resolvedData,
                          missing: missing || [],
                          extra: extra || []
                        })
                      }
                      break;
            
                    case 500:
                      failedTests.push({
                        testcase: testNumber,
                        code: 500,
                        errorDetails: expectJson,
                      });
            
                      break;
                    default:
            
                  }
            }catch (error){
              console.log(error)
            }
            });

      afterAll(async () => {
      const resultStep = await executeAllSteps([],globalContext)
        resultStep.forEach((step) => {
          failedStep.push({
            type: step.type,
            status: step.status,
            stepName: step.stepName,
            error: step.error
          })
        })
        const folderPath = path.join(__dirname, '../reports/create-channel');
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const classNames = `create-channel`;
        const summary = summarizeErrors(failedTests,codedTest, passed200, passed201);
        const reportFileName = `create-channel-request-${getTime()}.report.txt`;  
        const { combinedReportTemplate } = await import('../../utils/report-file');
        const reportContent = combinedReportTemplate(
            classNames,
            globalThis.url,
            pathRequest,
            failedStep,
            passedTests,
            failedTests,
            totalTests,
            logicTests,
            summary,
            testType
        );
        const reportPath = path.join(folderPath, reportFileName);
        fs.writeFileSync(reportPath, reportContent, 'utf-8');
        console.log(`📄 Combined report generated: ${reportPath}`);
      });
                          
    });

  