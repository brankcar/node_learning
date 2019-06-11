#include <napi.h>

using namespace Napi;

String SayHello(const CallbackInfo& info) {
  return String::New(info.Env(), "Hello world");
}
Napi::Object  Init(Env env, Object exports) {
  exports.Set("SayHello", Function::New(env, SayHello));
  return exports;
}
NODE_API_MODULE(addon, Init)