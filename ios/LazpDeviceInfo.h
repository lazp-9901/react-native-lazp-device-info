
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNLazpDeviceInfoSpec.h"

@interface LazpDeviceInfo : NSObject <NativeLazpDeviceInfoSpec>
#else
#import <React/RCTBridgeModule.h>

@interface LazpDeviceInfo : NSObject <RCTBridgeModule>
#endif

@end
