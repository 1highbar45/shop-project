import React from 'react'
import ListView from '../../../components/ListView/ListView';
import useQuery from '../../../hooks/useQuery';
import { profileService } from '../../../services/profileService'
import Skeleton from '@mui/material/Skeleton';

export default function Address() {
    const { data: address, loading } = useQuery(() => profileService.getAddressList());
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                {/* <ListView
                    LoadingComponent={null}
                    isLoading={loading}
                    items={address}
                    render={e => <AddressItem key={e.id} {...e} />}
                    loadingCount={6}
                /> */}
                <AddressItem />
                <div className="col-12">
                    {/* Button */}
                    <a className="btn btn-block btn-lg btn-outline-border" href="account-address-edit.html">
                        Add Address <i className="fe fe-plus" />
                    </a>
                </div>
            </div>
        </div>
    )
}

const AddressItem = ({ props }) => {
    return (
        <div className="col-12 col-lg-6">
            {/* Card */}
            <div className="card card-lg bg-light mb-8">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                        Billing Address
                    </h6>
                    {/* Text */}
                    <p className="text-muted mb-0">
                        Daniel Robinson <br />
                        3997 Raccoon Run <br />
                        Kingston <br />
                        45644 <br />
                        United States <br />
                        6146389574
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <a className="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
                            <i className="fe fe-edit-2" />
                        </a>
                        {/* Button */}
                        <button className="btn btn-xs btn-circle btn-white-primary">
                            <i className="fe fe-x" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddressItemLoading = () => {
    return (
        <div className="col-12 col-lg-6">
            {/* Card */}
            <Skeleton height={300} />
        </div>
    )
}
