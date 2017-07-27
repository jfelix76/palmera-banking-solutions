import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestimonialProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TestimonialProvider {

  dataStore: any;

  constructor(public http: Http) {
    
    this.dataStore = [
      {
        id: 1,
        text: '<span class="text-sm">\"Sarah Beth\’s work was outstanding in every way, and our team truly benefited from her insight and recommendations.  Every member of our FIU commented on Sarah Beth’s deep and complete understanding of the subject matter and was very appreciative of the insightful comments and recommendations she provided. I am especially impressed by her thorough professionalism and the way in which she conducted this review.  Her involvement was a great value add for us and we will welcome her back any time.\” <br><br><b>  – Chief Risk Officer, $6B Bank</b></span>'
      },
      {
        id: 2,
        text: '<span class="text-sm">\“I cannot provide higher praise for a compliance professional than for Sarah Beth Whetzel of Palmera Banking Solutions. She definitely delivered, impressing staff, clients and examiners. I would not consider any other BSA/AML professional to meet my department or company’s needs.\” <br><br><b>  – Compliance Executive for a Bank Technology Provider</b></span>'
      },
      {
        id: 3,
        text: '<span class="text-sm">\“Should you find the need for expertise, I highly recommend Sarah Beth Whetzel and Palmera Banking Solutions as a candidate to assist your organization in the area of BSA/AML and OFAC Compliance.  I worked with Mrs. Whetzel in 2010 and 2011 through various consulting engagements. Mrs. Whetzel was part of the team engaged to help remedy our BSA/AML/OFAC Compliance function which was under serious regulatory scrutiny.  With her assistance, enforcement actions placed on the organization were lifted in less than 12 months. Not only does she thoroughly understand regulation but she knows how to apply it to the operations of a financial institution to ensure compliance in a practical manner while identifying and eliminating gaps and providing efficiency.” <br><br><b>  – BSA/AML Officer $2B Bank</b></span>'
      },
      {
        id: 4,
        text: '<span class="text-sm">\“As our outsourced independent auditor for both systems validation and the AML/BSA audit her level of detail, depth of knowledge and ability to communicate is tremendous and unusual from an auditor. She really provided great insight to bringing our High Risk Customer reviews to an industry-leading level.” <br><br><b>  – Director of BSA/AML/OFAC, $3B Bank</b></span>'
      },
      {
        id: 5,
        text: '<span class="text-sm">\“The first year she conducted only the validation review and both the management team and audit department were very impressed so we brought her on-board for the entire BSA audit engagement. We received favorable reviews on the quality of the systems review from our examiners. The nature of the validation is ultimately very beneficial as she will provide insight to not only the data integrity and mapping of your system but will also provide insight to the quality of alerts. You will go in to your next Exam extremely confident with your monitoring systems. In light of what you were hoping for from your systems audit this year, I believe you will find that with Palmera.” <br> <br><b> – BSA Officer, $3B Bank</b></span>'
      },
      {
        id: 6,
        text: '<span class="text-sm">\“Mrs. Whetzel demonstrated her expertise regarding the Bank Secrecy Act, Anti-Money laundering initiatives, and fraud prevention techniques on the numerous occasions that I had met with her regarding financial fraud activity at her former employer. Additionally, I consider Mrs. Whetzel an expert in the field of financial fraud detection and prevention and I routinely called upon her expertise to assist me in solving complex financial fraud investigations.” <br><br><b>  – Secret Service Agent</b></span>'
      },
      {
        id: 7,
        text: '<span class="text-sm">\“As a special agent, I have worked professionally with Sarah Beth on multiple complex money laundering investigations. She has an unmatched knowledge of the regulations that surround anti-money laundering, fraud and the Bank Secrecy Act. I often go to her for advice and assistance. She is always willing to help and I trust her judgment and consider her to be an expert in the field of AML and Sarah Beth has a skill set that would make her an integral part of any organization. Sarah Beth has the knowledge, skill and abilities that would allow her to excel in any situation.” <br><br><b>  – IRS-CI Special Agent</b></span>'
      }
    ]
  }

  getDataStore() {
    return this.dataStore;
  }
  
}
