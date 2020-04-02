# This file is part of Indico.
# Copyright (C) 2002 - 2020 CERN
#
# Indico is free software; you can redistribute it and/or
# modify it under the terms of the MIT License; see the
# LICENSE file for more details.

from __future__ import unicode_literals

from indico.core.marshmallow import mm
from indico.modules.events.models.principals import EventPrincipal
from indico.util.marshmallow import PrincipalPermissionList


class EventPermissionsSchema(mm.Schema):
    acl_entries = PrincipalPermissionList(EventPrincipal, all_permissions=True)


event_permissions_schema = EventPermissionsSchema()
