//
//  NativeBridge.m
//  PhotoBomb
//
//  Created by Khrozz on 9/17/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "NativeBridge.h"

@implementation NativeBridge

RCT_EXPORT_MODULE(NativeBridge)

RCT_EXPORT_METHOD(showToast:(NSString *)message duration:(int)duration)
{
  UIViewController * rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  
  UIAlertController * alert = [UIAlertController alertControllerWithTitle : nil message : message preferredStyle : UIAlertControllerStyleAlert];
  
  [rootViewController presentViewController:alert animated:(YES) completion:nil];
  
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, duration * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
    [alert dismissViewControllerAnimated:YES completion:nil];
  });
  
}

RCT_EXPORT_METHOD(getMessage:(RCTResponseSenderBlock)callback)
{
  callback(@[@"You Rock!!!"]);
}

@end
