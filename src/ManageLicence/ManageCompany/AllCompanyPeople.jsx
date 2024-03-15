import React from "react"
import AddPeopleModel from "../../common/Model/AddPeopleModel"
import BreadCrum from "../../components/BreadCrum"
import { useParams } from "react-router-dom"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import TeamProfile from "../../components/TeamProfile"
import BlankPage from "../../components/BlankPage"
import EditTeamModel from "../../common/Model/EditTeamModel"

const AllCompanyPeople = () => {
  const { companyid } = useParams()

  const getAllMember = `/companyServices/company/team/members/getAllTeamMembers?companyId=${companyid}`
  const allMemberDep = []

  const { productData: allTeamMember, loading: mamberLoading } = useCustomRoute(
    getAllMember,
    allMemberDep
  )


  return (
    <>
      <BreadCrum />
      <div className="manage-compnies">
        <h2 className="heading-primary">All Team Members</h2>
        <div className="add-border p-0">
          <AddPeopleModel />
        </div>

        <div className="team-member-box px-0">
          {allTeamMember.length === 0 ? (
            <BlankPage data={"Please Add New Team Member"} />
          ) : (
            allTeamMember.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-profile">
                  <TeamProfile
                    teamLeadName={member.memberMobile}
                    teamName={member.memberName}
                    leadDesignation={member.memberMail}
                  />
                </div>
                <div className="member-type">
                  <p className="member-text">{member.typeOfResource}</p>
                </div>
                <div>
                  <EditTeamModel teamId={"1"} leadName={"lead"} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default AllCompanyPeople
